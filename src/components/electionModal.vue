<template>
  <modal :close="closeModal" @formsave="addElection">
    <template v-slot:title>
      <h5 class="modal-title" id="exampleModalLabel">Add Election</h5>
    </template>
    <template v-slot:content>
      <form>
        <div class="form-group mb-0">
          <label for="election-name" class="col-form-label"
            >Election name</label
          >
          <input
            v-model="election.name"
            type="text"
            class="form-control"
            id="election-name"
          />
        </div>
        <div class="form-group">
          <label for="message-text" class="col-form-label">Tag line</label>
          <textarea
            v-model="election.tagline"
            class="form-control"
            id="message-text"
          ></textarea>
        </div>
        <div class="form-group">
          <label for="">Start DateTime</label>
          <input
            v-model.lazy="election.start_time"
            type="datetime-local"
            name="startTime"
            id="startTime"
          />
        </div>
        <div class="form-group">
          <label for="">End DateTime</label>
          <input
            v-model.lazy="election.end_time"
            type="datetime-local"
            name="endTime"
            id="endTime"
          />
        </div>
      </form>
    </template>
  </modal>
</template>

<script>
import Modal from '../components/modal';
import { createElection } from "../services/apiService";

export default {
    components : {
        Modal
    },
    data(){
        return {
            election :{}
        }
    },

    methods:{
        addElection(){
            createElection(this.election)
            .then(response=>{
                if(response?.data){
                    alert(response.message);
                    this.onElectionCreated(response.data);
                }
            })
        }
    },
    props : ['closeModal','onElectionCreated']
}
</script>