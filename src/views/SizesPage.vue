<template>
    <div class="col-lg-9">
        <h3 class="text-start">Розміри букетів</h3>
        <div class="btn-group mb-3" role="group" aria-label="Панель керування">
            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">Створити</button>
        </div>
        <table class="table table-striped table-hover">
            <thead>
                <th style="width: 100px;" scope="col">ID</th>
                <th scope="col">Назва</th>
                <th scope="col">Min</th>
                <th scope="col">Max</th>
            </thead>
            <tbody class="table-group-divider">
                <tr v-for = "size in sizes" v-bind:key="size.id">
                    <td> {{ size.id }}</td>
                    <td> {{ size.name }}</td> 
                    <td> {{ size.min }}</td>
                    <td> {{ size.max }}</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Новий розмір</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <span>Назва:</span>
                    <input v-model="name" placeholder="назва розміру">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрити</button>
                    <button type="button" class="btn btn-primary">Зберегти</button>
                </div>
            </div>
        </div>
</div>

</template>

<script>
import SizeService from '../sevices/SizeService'

export default {
  name: 'SizesPage',
  data(){
            return {
                sizes : []
            }
        },
        methods:{
            getAll(){
                SizeService.getAll().then((response) => {
                    this.sizes = response.data;
                })
            }
        },
        created(){
            this.getAll()
        }
        
}
</script>