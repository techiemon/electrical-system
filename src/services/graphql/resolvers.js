// src/services/graphql/resolvers.js
import request from 'request-promise';

export default function Resolvers() {

  let app = this;

	// Define services here
	let Users = app.service('users');
	let Buildings = app.service('building');
	let Panels = app.service('panel');
	let Rooms = app.service('room');
	let Images = app.service('image');
	let Breakers = app.service('breaker');
	let Loads = app.service('load');
	let Toggles = app.service('toggle');
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
