// import axios from 'axios';


// const axiosClient =  axios.create({
//     baseURL : 'http://api.backend.com',
//     timeout: 30000
// });



export const adminLogin = function(credentials){
    // return axiosClient.post('/login',credentials);


    // mimic login flow
    return new Promise((resolve,reject)=>{

        const username = "test@walulel.com",
        password = "password123";

        setTimeout(()=>{
            if(username == credentials.username && password == credentials.password){
                resolve({
                  data: {
                    token: "RANDOM_TOKEN",
                    user: {
                      name: "test user",
                      email: "test@walulel.com",
                      role: "admin",
                    },
                  },
                });
            }else{
                reject("Incorrect username or password");
            }
        }, 4000)
    })
}


export const getElections = function(){

    // return axiosClient.get('/elections');
    
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({
              data: [...elections],
            });
        },2000)
    })
}


export const createElection =  function (election){

    return new Promise(resolve=>{
        setTimeout(() => {
            const e = { ...election, id: 1111 };
            elections.push(e);
          resolve({
            data: e,
            message : "Election created successful"
          });
        }, 2000);
    })
}


export const updateElection = function(id, updatedElection) {

  // return axiosClient.patch('election/'+id,updatedElection);

  return new Promise((resolve) => {
    setTimeout(() => {
      elections =  elections.map(x_election=>{
        if(x_election.id === id)
        {
          return updatedElection;
        }
        return x_election;
      })   
      resolve({
        data: {...updatedElection},
        message: "Election updated successful",
      });
    }, 2000);
  });
};


export const deleteElection =  function(id){
//  return axiosClient.delete('election/'+id);
return new Promise((resolve) => {
  setTimeout(() => {
    elections =  elections.map(del_election=>{
      if(del_election.id === id)
      {
        return deleteElection;
      }
      return del_election;
    })   
    resolve({
      data: {...deleteElection},
      message: "Election deleted successful",
    });
  }, 2000);
});
}

let elections = [
  {
    id: 1,
    name: "2020 Election",
    start_time: "2020/07/11 10:00:00",
    end_time: "2020/07/11 18:00:00",
  },

  {
    id: 2,
    name: "2020 Election 2",
    start_time: "2020/07/11 9:00:00",
    end_time: "2020/07/11 12:00:00",
  },
  {
    id: 3,
    name: "2020 Election 3",
    start_time: "2020/08/11 10:00:00",
    end_time: "2020/08/11 18:00:00",
  },
  {
    id: 4,
    name: "2020 Election 4",
    start_time: "2020/07/12 10:00:00",
    end_time: "2020/07/12 18:00:00",
  },
];

// create Positions
export const getPositions = function(){

  // return axiosClient.get('/positions');
  
  return new Promise((resolve)=>{
      setTimeout(()=>{
          resolve({
            data: [...positions],
          });
      },2000)
  })
}

export const createPosition =  function (position){

  return new Promise(resolve=>{
      setTimeout(() => {
          const e = { ...position, id: 12 };
          positions.unshift(e);
        resolve({
          data: e,
          message : "Position created successful"
        });
      }, 2000);
  })
}

export const updatePosition = function(id, updatedPosition) {

  // return axiosClient.patch('position/'+id,updatedPosition);

  return new Promise((resolve) => {
    setTimeout(() => {
      positions =  positions.map(x_position=>{
        if(x_position.id === id)
        {
          return updatedPosition;
        }
        return x_position;
      })   
      resolve({
        data: {...updatedPosition},
        message: "Position updated successful",
      });
    }, 2000);
  });
};


let positions = [
{
  id: 1,
  title: "President"
},
{
  id:2,
  title: "Secretary"
}


];