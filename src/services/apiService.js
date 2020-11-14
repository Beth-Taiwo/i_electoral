import axios from 'axios';


const axiosClient =  axios.create({
    baseURL : 'https://test.api.walulel.com/api',
    // baseURL : 'https://cc5997dc57ee.ngrok.io/api',
    timeout: 60000
});
axiosClient.interceptors.request.use((request) => {
  
  const token = localStorage.getItem('access_token');
  if(token){
    let c = JSON.parse(token);
    request.headers = { 
      'Authorization': `Bearer ${c.token}`,
      'Accept': 'application/json',
    }

  }

  return request;
}
);

axiosClient.interceptors.response.use((response)=>{
      return response;
  },(error)=>{
    let status = error.response.status;
    switch(status){
      case 401:
        alert("unauthenication");
        localStorage.clear();
        break;
      case 422:
        alert("Validation error");
        break;
      case 403:
        alert("Unauthorized access");
        break;
      case 429:
        alert("Too many request");
        break;
  
    }

  }
  )

export const adminLogin = function(credentials){
    return axiosClient.post('/admin/auth/login',credentials);
}
//getStatistics
export const getStatistics = function(){
  return axiosClient.get('/dashboard/stats');
}

//Election
export const getElections = function(){
    return axiosClient.get('/dashboard/elections');
}
export const viewElection = function(id){
  return axiosClient.get('/dashboard/elections/' + id)
}

export const createElection =  function (election){
  return axiosClient.post('/dashboard/elections',election)
}


export const updateElection = function(id, updatedElection) {
  return axiosClient.patch('/dashboard/elections/'+id,updatedElection);
};

export const deleteElectionByID=  function(id){
 return axiosClient.delete('/dashboard/elections/'+id);
}


// create Positions
export const getPositions = function(){
  return axiosClient.get('/dashboard/positions');
}

export const getElectionPositions = function(electionId){
  return axiosClient.get('/dashboard/elections/'+ electionId +'/positions');
}

export const createPosition =  function (electionId, position){
return axiosClient.post('/dashboard/elections/'+ electionId +'/positions', position)
 
}
export const viewPosition = function(positionId){
  return axiosClient.get('/dashboard/positions/'+positionId);
}

export const updatePosition = function(id, updatedPosition) {

  return axiosClient.patch('/dashboard/positions/'+id,updatedPosition);

 
};
export const deletePosition = function(positionId){
  return axiosClient.delete('/dashboard/positions/'+positionId);
}

//create candidate
export const createCandidate= function(positionId,candidate, config){
  return axiosClient.post('/dashboard/positions/'+ positionId + '/candidates', candidate, config );
}

export const updateCandidate = function(candidateId, updateCandidate){
  return axiosClient.patch('/dashboard/candidates/' + candidateId, updateCandidate);
}

export const viewCandidate = function(candidateId){
  return axiosClient.get('/dashboard/candidates/'+ candidateId);
}

export const deleteCandidateByID = function(candidateId){
  return axiosClient.delete('/dashboard/candidates/'+ candidateId);
}

export const updateCandidatePicture = function(candidateId,img){
  return axiosClient.post('/dashboard/candidates/'+ candidateId+ '/update-profile-picture', img)
}
export const listAllCandidates = function(){
  return axiosClient.get('/dashboard/candidates')
}

//create voter
export const registerVoter = function(voter){
  return axiosClient.post('/dashboard/voters', voter)
}
export const viewVoter = function(voterId){
  return axiosClient.get('/dashboard/voters/' + voterId);
}
export const updateVoter =  function(voterId, updateVoter){
  return axiosClient.patch('/dashboard/voters/'+ voterId,updateVoter)
}
export const deleteVoterByID = function(voterId){
  return axiosClient.delete('/dashboard/voters/' + voterId);
}
export const listAllVoters = function(){
  return axiosClient.get('/dashboard/voters');
}

//votes
export const createNewVote = function(electionId, vote){
  return axiosClient.post('/elections/' + electionId+ '/votes', vote);
}

//view results
export const listResults = function(electionId){
  return axiosClient.get('/elections/' + electionId + '/results');
}
