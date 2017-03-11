// src/services/graphql/resolvers.js
import request from 'request-promise';

export default function Resolvers() {

  let app = this;

	// Define services here
	let Users = app.service('users');
	let Buildings = app.service('buildings');
	let Panels = app.service('panels');
	let Rooms = app.service('rooms');
	let Images = app.service('images');
	let Breakers = app.service('breakers');
	let Loads = app.service('loads');
	let Toggles = app.service('toggles');
	let Viewer = app.service('viewer');

	const localRequest = request.defaults({
		baseUrl: `http://${app.get('host')}:${app.get('port')}`,
		json: true
	});

  return {

		// Models here
		User: {
			buildings(user, args, context) {
				return Buildings.find({
					query: {
						userId: user._id
					}
				});
			}
		},
		Building: {
			panels(building, args, context) {
				return Panels.find({
					query: {
						buildingId: building._id
					}
				});
			},
			rooms(building, args, context) {
				return Rooms.find({
					query: {
						buildingId: building._id
					}
				});
			}
		},
		Panel: {
			breakers(panel, args, context) {
				return Breakers.find({
					query: {
						panelId: panel._id
					}
				});
			},
			image(panel, args, context) {
				return Images.find({
					query: {
						panelId: panel._id
					}
				});
			}
		},
		Room: {
			loads(room, args, context) {
				return Loads.find({
					query: {
						roomId: room._id
					}
				});
			}
		},
		Image: {

		},
		Breaker: {
			loads(breaker, args, context) {
				return Loads.find({
					query: {
						breakerId: breaker._id
					}
				});
			}
		},
		Load: {
			switches(load, args, context) {
				return Toggles.find({
					query: {
						loadId: load._id
					}
				});
			}
		},
		Toggle: {

		},
		AuthPayload: {
			data(auth, args, context) {
				return auth.data;
			}
		},

		RootQuery: {
			viewer(root, args, context) {
				return Viewer.find(context);
			},
			buildings(root, args, context) {
				context.query = {

				};
				return Buildings.find({
					// query: {},
					provider: context.provider,
					token: context.token
				});
			},
			panels(root, { buildingId }, context) {
				context.query = {
					buildingId
				};
				return Panels.find(context);
			}
		},

		RootMutation: {
			signUp(root, args, context) {
				return Users.create(args)
			},
			logIn(root, {username, password}, context) {
				return localRequest({
					uri: '/auth/local',
					method: 'POST',
					body: { username, password }
				});
			}
		}

  }
}
