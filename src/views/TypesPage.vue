<template>
    <div class="col-lg-9">
        <h3 class="text-start">Типи квітів</h3>
        <div class="btn-group mb-3" role="group" aria-label="Панель керування">
            <button @click="openModal">Открыть модальное окно</button>
        </div>
        <table class="table table-striped table-hover">
            <thead>
                <th style="width: 100px;" scope="col">ID</th>
                <th scope="col">Назва</th>
            </thead>
            <tbody class="table-group-divider">
                <tr v-for = "type in types" v-bind:key="type.id">
                    <td> {{ type.id }}</td>
                    <td> {{ type.name }}</td> 
                </tr>
            </tbody>
        </table>
    </div>

    <div class="modal fade" :class="{ 'show': showModal }">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Новий тип</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label for="nameInput" class="form-label">Назва</label>
                        <input v-model="newTypename" placeholder="введіть назву типу" id="nameInput" class="form-control">
                    </div>
                    
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрити</button>
                    <button type="button" class="btn btn-primary" @click="addNew">Зберегти</button>
                </div>
            </div>
        </div>
</div>

</template>

<script setup>
import TypesService from '../sevices/TypesService'


</script>

<script>


export default {
  name: 'TypePage',
  data(){
            return {
                types : [],
                showModal: false,
                newTypename: ""
            }
        },
        methods:{
            getAll(){
                TypesService.getAll().then((response) => {
                    this.types = response.data;
                })
            },
            openModal(){
                this.showModal = true;
            },
            addNew (){
                this.showModal = false;
                const newType = {
                    name: this.newTypename
                }

                TypesService.add(newType).then((response) => {
                    console.log(response.data);
                    this.newTypename = "";
                })
    
}
        },
        created(){
            this.getAll()
        }
        
}
</script>