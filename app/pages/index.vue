<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <ContentCard
        v-for="(item, i) in items" :key="i"
        :card_title="item.card_title"
        :card_text="item.card_text"
        :edit_url="'media/' + item.id"
      >
      </ContentCard>
    </v-layout>
  </v-container>
</template>

<script>
import ContentCard from '../components/ContentCard'
export default {
  components: {
    ContentCard
  },
  data(){
    return {
      items : [
        {
          card_title: "11111111111111111",
          card_text : "1",
          id: "1983741",
        },
        {
          card_title: "22222222222222222",
          card_text : "2",
          id: "5734251",
        },
        {
          card_title: "33333333333333333",
          card_text : "3",
          id: "4029452",
        },
        {
          card_title: "44444444444444444",
          card_text : "4",
          id: "7908806",
        },
        {
          card_title: "55555555555555555",
          card_text : "5",
          id: "0834512",
        },
        {
          card_title: "66666666666666666",
          card_text : "6",
          id: "9084532",
        },
        {
          card_title: "77777777777777777",
          card_text : "7",
          id: "8974036",
        },
      ]
    }
  }
}
</script>
