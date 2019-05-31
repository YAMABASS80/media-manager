<template>
  <v-container grid-list-md fluid>
    <v-layout column wrap>
      <ContentCard
        v-for="(item, i) in items" :key="i"
        :card_title="item.card_title"
        :card_text="item.card_text"
      >

      </ContentCard>
      <!-- <ContentCard></ContentCard> -->


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
          card_title: "ほげほげお",
          card_text : "ああああああああああああああああ"
        },
        {
          card_title: "あｄふぁうぇらｐｄさｆｄふぁｄさ",
          card_text : "いいいいいいいいいいいいいいいいいい"
        }
      ]
    }
  }
}
</script>
