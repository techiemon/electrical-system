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
				context.query = {};
				return Buildings.find(context);
			},
			building(root, { id }, context) {
				// get refuses to apply restrictToOwner or any hooks. Feathers bug :( won't accept context either.
				// This appears to be the only way atm to limit the access via hooks.
				context.query = {
					_id: id
				};
				return Buildings.find(context).then((d) => d[0]);
			},

			rooms(root, { buildingId }, context) {
				context.query = {
					buildingId: buildingId
				};
				return Rooms.find(context);
			},
			room(root, { id }, context) {
				context.query = {
					_id: id
				};
				return Rooms.find(context).then((d) => d[0]);
			},

			panels(root, { buildingId }, context) {
				context.query = {
					buildingId: buildingId
				};
				return Panels.find(context);
			},
			panel(root, { id }, context) {
				context.query = {
					_id: id
				};
				return Panels.find(context).then((d) => d[0]);
			},

			breakers(root, { panelId }, context) {
				context.query = {
					panelId: panelId
				};
				return Breakers.find(context);
			},
			breaker(root, { id }, context) {
				context.query = {
					_id: id
				};
				return Breakers.find(context).then((d) => d[0]);
			},

			roomLoads(root, { roomId }, context) {
				context.query = {
					roomId: roomId
				};
				return Loads.find(context);
			},
			breakerLoads(root, { breakerId }, context) {
				context.query = {
					breakerId: breakerId
				};
				return Loads.find(context);
			},
			toggle(root, { id }, context) {
				context.query = {
					_id: id
				};
				return Toggles.find(context).then((d) => d[0]);
			}

		},

		RootMutation: {
			signUp(root, args, context) {
				return Users.create(args, context);
			},
			logIn(root, {username, password}, context) {
				return localRequest({
					uri: '/auth/local',
					method: 'POST',
					body: { username, password }
				});
			},

			createBuilding(root, args, context) {
				return Buildings.create(args, context);
			},

			updateBuilding(root, args, context) {
				return Buildings.update(args, context);
			},

			// deleteBuilding(root, { _id }, context) {
      //   return Buildings.remove({_id}, context);
      // },

			createRoom(root, args, context) {
				return Room.create(args, context);
			},
			updateRoom(root, args, context) {
				return Room.update(args, context);
			},
			// deleteRoom(root, { _id }, context) {
      //   return Room.remove(_id, context);
      // },
			
			createPanel(root, args, context) {
				return Panel.create(args, context);
			},
			updatePanel(root, args, context) {
				return Panel.update(args, context);
			},
			// deletePanel(root, { _id }, context) {
      //   return Panel.remove(_id, context);
      // }


		}

  }
}
