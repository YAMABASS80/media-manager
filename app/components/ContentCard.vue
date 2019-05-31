<template>
  <div>
    <v-flex xs12>
      <v-card color="gray lighten-4">
        <v-card-title primary-title>
          <div>
            <div class="headline">{{card_title}}</div>
            <span>{{card_text}}</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat>再生</v-btn>
          <v-btn flat>編集</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
export default {
  name : "ContentCard",
  props : [
    "card_title",
    "card_text"
  ]
};
</script>
