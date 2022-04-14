/**
 * @author mcstaralliance
 * @version 1.0.11
 */

// priority: 1

onEvent('recipes', event => {
	event.remove({id: 'create:andesite_alloy'})

	event.shaped('4x kubejs:andeside_alloy_dust', [
		'XOX',
		'OXO',
		'XOX'
	], {
		X: 'minecraft:andesite',
		O: '#forge:dusts/iron'
	})
	
	event.smelting('create:andesite_alloy', 'kubejs:andeside_alloy_dust')
})
