<template>
  <div>
    <v-container>
      <v-snackbar
        v-model="snackbar.isOpen"
        :timeout="2000"
        top
        centered
        :color="snackbar.color"
      >
        {{ snackbar.text }}
      </v-snackbar>
    </v-container>
    <EditItem
      v-if="result && result.User"
      update-button
      delete-button
      snackbar-text="working"
      snackbar-type="success"
      :update-button-loading="saveButtonState"
      :delete-button-loading="deleteButtonState"
      @save="handleUpdate"
      @remove="handleRemove"
    >
      <UserView v-model="result.User" />
    </EditItem>
  </div>
</template>
<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api'
import gql from 'graphql-tag'
import EditItem from '@/components/Item/EditItem.vue'
import UserView from '@/components/User/UserView.vue'

import useEditItem from '@/hooks/useEditItem'

export default defineComponent({
  components: {
    EditItem,
    UserView,
  },
  setup() {
    const { route } = useContext()

    const {
      snackbar,
      updateMutation,
      removeMutation,
      saveButtonState,
      deleteButtonState,
      result,
    } = useEditItem({
      updateMutation: gql`
        mutation updateArticle($id: String!, $mutationData: UpdateUserInput!) {
          updateUser(id: $id, data: $mutationData) {
            id
            name
          }
        }
      `,
      removeMutation: gql`
        mutation removeItem($id: ID!) {
          deleteUser(id: $id)
        }
      `,
      getQuery: {
        query: gql`
          query($id: String!) {
            User(id: $id) {
              id
              name
              email
              profilePicture
              role
              createdAt
              updatedAt
              expirationDate
            }
          }
        `,
        vars: { id: route.value.params.id },
      },
    })

    const handleUpdate = () => {
      saveButtonState.value = true
      updateMutation({
        id: result.value.Category.id,
        mutationData: {
          name: result.value.Category.name,
        },
      })
    }

    const handleRemove = () => {
      deleteButtonState.value = true
      removeMutation({ id: result.value.Category.id })
    }

    return {
      result,
      snackbar,
      handleUpdate,
      handleRemove,
      saveButtonState,
      deleteButtonState,
    }
  },
})
</script>
