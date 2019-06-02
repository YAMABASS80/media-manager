<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <ContentCard
        v-for="(item, i) in items" :key="i"
        :card_title="item.card_title"
        :card_text="item.card_text"
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
          card_text : "1"
        },
        {
          card_title: "22222222222222222",
          card_text : "2"
        },
        {
          card_title: "33333333333333333",
          card_text : "3"
        },
        {
          card_title: "44444444444444444",
          card_text : "4"
        },
        {
          card_title: "55555555555555555",
          card_text : "5"
        },
        {
          card_title: "66666666666666666",
          card_text : "6"
        },
        {
          card_title: "77777777777777777",
          card_text : "7"
        },
      ]
    }
  }
}
</script>
