var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var cleanUp = function(){
  console.log("Grafully killing")
  server.close()
}
process.on('uncaughtException', cleanUp);
process.on('SIGTERM', cleanUp);
process.on('exit', cleanUp);


server.listen(80);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

var clientsSockets= {};
var currentUsersIds = [];

io.on('connection', function (socket) {

  socket.on('connectToWorkout', function(rowerJSON){
    var rower = RowerController.getRower(rowerJSON);
    rower.setSocket(socket);
    // add the workout if non-existing or get current workout
    var workout = WorkoutController.getWorkout(rower);
    workout.addRower(rower);
    // Save workout changes to db
    workout.save();
    // rowerJSON = socket;


    // var workout = rower.workout;
    // workout doesn't exist
    // workout = {} or undefined
    // workout = {ditance:20000,time:60*60}
    // connect to existing workout
    // workout = {id=123}

    


    /*
    if(listCurrentWorkouts[workout.id]==undefined):
      listCurrentWorkouts[workout.id] = WorkoutUtil.createWorkout(workout);
    workout = listCurrentWorkouts[workout.id];
    */
    // add rower to workout
    

  });

  socket.on('ergData', function (ergData) {
    console.log(ergData);
    workout = WorkoutController.getWorkoutFromErg(ergData);
    user = WorkoutController.getUserFromErg(ergData);
    // Broadcast to users the info we just got
    workout.broadcastToPeers(user, ergData)
    // Save the data to the user
    user.saveErgData(ergData);
  });
});

  // socket.emit('boop',{'data':'meow','Muerte':'bark'})

  // console.log("python connected")
  // socket.emit('clientGretting', { hello: 'world' });


    // save to the DB
    // console.log(currentUsersIds.length);
    /*
    for (var i = 0;i<currentUsersIds.length;i++){
      var currentUserSocket = clientsSockets[currentUsersIds[i]];
      currentUserSocket.emit('news', data);
    }*/

    // currentUser.

  /*
  socket.on('clientId',function(data){

    console.log('got client id '+ data)
    if(clientsSockets[data]===undefined)
      currentUsersIds.push(data);

    clientsSockets[data] = socket;

    // currentUser = socket;

  });
  /*
  socket.on('bbb',function(data){
    console.log(data);
  });
*/
