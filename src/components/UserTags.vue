<template>
  <v-card
    class="mb-5"
    flat
  >
    <v-layout row>
			<v-flex xs6 order-md1 order-xs1>
        <span class="tags-counter">test tag ({{allTags}})</span>
      </v-flex>
      <v-flex xs6 order-md2 order-xs2>
        <v-autocomplete
				  v-model="selected"
					:items="tags"
					color="white"
					label="+ Add more"
					clearable
					multiple
				></v-autocomplete>
      </v-flex>
    </v-layout>
    <v-btn
			right
			absolute
			color="primary"
			@click="addTag"
    >
      Save
    </v-btn>

  </v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'UserTags',
  data () {
    return {
			selected: [],
			tags: [
				'Add all',
				'Tag1',
				'Atag2',
				'Btag3'
			]
    }
  },
  computed: {
		allTags () {
			if (this.selected.includes('Add all')) {
				this.selected = this.tags
				return this.selected.length - 1
			} else return this.selected.length
		}
	},
	methods: {
		 ...mapActions(['setTags']),
		addTag () {
			this.$emit('setStep', 1)
			this.setTags(this.selected.filter(item => item !== 'Add all'))
		}
	},
  watch: {
		selected (newArray, oldArray) {
		 if (oldArray.includes('Add all') && !newArray.includes('Add all')) {
				this.selected = []
			}
		}
  }
}
</script>

<style scoped>
.tags-counter {
	background-color: #20AC7F;
	float: right;
	padding: 2px 5px;
	margin-top: 2px;
	border-radius: 2px;
}
</style>