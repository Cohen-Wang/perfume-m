<script lang="ts" setup name="HomeIndex">
import { ref } from 'vue'
import { isYesterday, addDays } from 'date-fns/esm'
// +--------------------------------------------------
// | data
// +--------------------------------------------------
const value = ref(addDays(Date.now(), 1).valueOf())
// +--------------------------------------------------
// | methods
// +--------------------------------------------------
const handleUpdateValue = (_: number, { year, month, date }: { year: number; month: number; date: number }): void => {
	// message.success(`${year}-${month}-${date}`)
}
</script>

<template>
	<div class="bg-white shadow p-3">
		<n-calendar
			v-model:value="value"
			#="{ year, month, date }"
			@update:value="handleUpdateValue"
		>
			{{ year }}-{{ month }}-{{ date }}
		</n-calendar>
	</div>
</template>
