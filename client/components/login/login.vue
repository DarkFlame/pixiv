<template lang="pug">
    div
        el-form(label-position="right",label-width="100px",style="width:300px;")
            el-form-item(label="用户名")
                el-input(v-model="username", placeholder="请选择日期", icon="search")
            el-form-item(label="密码")
                el-input(v-model="password",type="password", placeholder="密码", icon="search")
            el-form-item
                el-button(@click="regist",type="info") 注册
        el-button(v-if="isShowSelectedUserList",type="info",@click="removeUserBySelectKey(selectedUserList)") 批量删除
        el-table(:data="userList", stripe, border, @selection-change="handleSelectionChange")
            el-table-column(type="selection", width="60")
            el-table-column(prop="key", label="key", width="300")
            el-table-column(prop="username", label="用户名", width="180")
            el-table-column(prop="password", label="密码", width="180")
            el-table-column(label="操作",width="100")
                template(scope="scope")
                    el-button(@click="removeUserByKey(scope)", type="text", size="large")
                        i(class="el-icon-delete")

</template>


<script>
    import {
        routerView,
        routerLink
    } from 'vue-router'
    import {
        mapState,
        mapGetters,
        mapActions
    } from 'vuex'
    export default{
        created(){
            this.initUserTableData()
        },
        data(){
            return {}
        },
        computed: {

            ...mapGetters({
                userList: 'userList',
                selectedUserList: 'selectedUserList'
            }),
            isShowSelectedUserList(){
                return this.selectedUserList.length > 0
            },
            username: {
                get(){
                    return this.$store.state.login.username
                },
                set(val){
                    this.$store.dispatch('setUsername',val)
                }
            },
            password: {
                get(){
                    return this.$store.state.login.password
                },
                set(val){
                    this.$store.dispatch('setPassword',val)
                }
            }
        },
        methods: {
            ...mapActions({
                initUserTableData: 'getAllUser',
                handleSelectionChange: 'setSelectedUserList',
                removeUserBySelectKey: 'removeUserBySelectKey',
            }),

            removeUserByKey(scope){
                this.$store.dispatch('removeUserByKey',{key: scope.row.key}).then((res) => {
                    this.initUserTableData()
                })
            },
            regist(){
                this.$store.dispatch('login',{
                    username: this.username,
                    password: this.password
                }).then((res) => {
                    console.log(res)
                    this.initUserTableData()
                })
            }

        }

    }


</script>
