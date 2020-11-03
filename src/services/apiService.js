import axios from 'axios';


const axiosClient =  axios.create({
    baseURL : 'https://test.api.walulel.com/api',
    timeout: 30000
});
axiosClient.interceptors.response.use((response)=>{
      return response;
  },(error)=>{
    // console.log(error.response.status);
    let status = error.response.status;
    switch(status){
      case 401:
        console.log("unauthenication");
        break;
      case 422:
        console.log("Validation error");
        break;
      case 403:
        console.log("Unauthorized access");
        break;
      case 429:
        console.log("Too many request");
        break;
  
    }

  }
  )

export const adminLogin = function(credentials){
    return axiosClient.post('/admin/auth/login',credentials);
}


export const getElections = function(){

    return axiosClient.get('/elections');
    
}
export const viewElection = function(id){
  return axiosClient.get('/elections/' + id)
}

export const createElection =  function (election){
return axiosClient.post('/elections',election)
  
}


export const updateElection = function(id, updatedElection) {

  return axiosClient.patch('elections/'+id,updatedElection);

 
};


export const deleteElection =  function(id){
 return axiosClient.delete('elections/'+id);

}


// create Positions
export const getPositions = function(electionId){

  return axiosClient.get('/elections/'+ electionId +'/positions');
  
 
}

export const createPosition =  function (electionId,position){
return axiosClient.post('/elections/'+ electionId +'/positions', position)
 
}
export const viewPosition = function(positionId){
  return axiosClient.get('/positions/'+positionId);
}

export const updatePosition = function(id, updatedPosition) {

  return axiosClient.patch('/positions/'+id,updatedPosition);

 
};
export const deletePosition = function(positionId){
  return axiosClient.delete('/positions/'+positionId);
}

//create candidate
export const createCandidate= function(positionId,candidate){
  return axiosClient.post('/positions/'+ positionId + '/candidates', candidate);
}

export const updateCandidate = function(candidateId, updateCandidate){
  return axiosClient.patch('/candidates/' + candidateId, updateCandidate);
}

export const viewCandidate = function(candidateId){
  return axiosClient.get('/candidates/'+ candidateId);
}

export const deleteCandidate = function(candidateId){
  return axiosClient.delete('/candidates/'+ candidateId);
}

export const updateCandidatePicture = function(candidateId,img){
  return axiosClient.post('/candidates/'+ candidateId+ '/update-profile-picture', img)
}
export const listAllCandidates = function(){
  return axiosClient.get('/candidates')
}

//create voter
export const registerVoter = function(voter){
  return axiosClient.post('/voters', voter)
}
export const viewVoter = function(voterId){
  return axiosClient.get('/voters/' + voterId);
}
export const updateVoter =  function(voterId, updateVoter){
  return axiosClient.patch('/voters/'+ voterId,updateVoter)
}
export const deleteVoter = function(voterId){
  return axiosClient.delete('/voters/' + voterId);
}
export const listAllVoters = function(){
  return axiosClient.get('/voters');
}

//votes
export const createNewVote = function(electionId, vote){
  return axiosClient.post('/elections/' + electionId+ '/votes', vote);
}

//view results
export const listResults = function(electionId){
  return axiosClient.get('/elections/' + electionId + '/results');
}
/*

// create candidate
export const getCandidates = function(){

  // return axiosClient.get('/candidates');
  
  return new Promise((resolve)=>{
      setTimeout(()=>{
          resolve({
            data: [...candidates],
          });
      },2000)
  })
}

export const createCandidate =  function (candidate){

  return new Promise(resolve=>{
      setTimeout(() => {
          const e = { ...candidate, id: 12 };
          candidates.unshift(e);
        resolve({
          data: e,
          message : "candidate created successful"
        });
      }, 2000);
  })
}

export const updateCandidate = function(id, updatedCandidate) {

  // return axiosClient.patch('candidate/'+id,updatedCandidate);

  return new Promise((resolve) => {
    setTimeout(() => {
      candidates =  candidates.map(x_candidate=>{
        if(x_candidate.id === id)
        {
          return updatedCandidate;
        }
        return x_candidate;
      })   
      resolve({
        data: {...updatedCandidate},
        message: "Candidate updated successful",
      });
    }, 2000);
  });
};


let candidates = [
{
  id: 1,
  fullname: "Mr Somebody",
  Bio: "Sometext that describes .......",
  position: "president",
  img: ""
},
{
  id:2,
  fullname: "Mr Somebody",
  Bio: "Sometext that describes .......",
  position: "Secretary",
  img: ""
}


];

*/