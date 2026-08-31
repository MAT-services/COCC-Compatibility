// kubejsstudio registry additions; re-apply merges by id
StartupEvents.registry('fluid', event => {
    event.create('kubejs:blood').displayName('Blood').tint('#ff0000').renderType('translucent').translucent().type(t => t.canExtinguish(true).supportsBoating(true))
})
