/**
 * @author mcstaralliance
 * @version 1.0.9
 */

// priority: 1

onEvent('recipes', event => {
	event.remove({id: 'minecraft:crafting_table'})

	event.shaped('minecraft:crafting_table', [
		'XO',
		'OX'
	],{
		O: '#minecraft:logs', 
		X: 'create:andesite_alloy'
	})
})
