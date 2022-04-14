// priority: 0


onEvent('item.registry', event => {
	event.create('andeside_alloy_dust').displayName('安山合金粉').group('misc')
})

onEvent('block.registry', event => {
	event.create('universal_frame_mk1_block').displayName('通用框架 Mk1').hardness(1.0).meterial('rock').group('misc')
})
onEvent('block.registry', event => {
	event.create('universal_frame_mk2_block').displayName('通用框架 Mk2').hardness(1.0).meterial('rock').group('misc')
})
onEvent('block.registry', event => {
	event.create('universal_frame_mk3_block').displayName('通用框架 Mk3').hardness(1.0).meterial('rock').group('misc')
})