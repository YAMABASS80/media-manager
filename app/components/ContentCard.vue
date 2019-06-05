<template>
  <div>
    <v-flex xs12 md>
      <v-card color="gray lighten-4">
        <v-img
          src=https://picsum.photos/200/150/?random height="200px"

        ></v-img>
        <v-card-title primary-title>
          <div>
            <div class="headline">{{card_title}}</div>
            <span>{{card_text}}</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat>
            <v-icon>play_arrow</v-icon>
          </v-btn>
          <v-btn flat :to="edit_url">
            <v-icon>edit</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
export default {
  name : "ContentCard",
  props : {
    card_title: {
      type: String
    },
    card_text: {
      type: String
    },
    card_image: {
      type: String
    },
    edit_url: {
      type: String
    }
  }
};
</script>
