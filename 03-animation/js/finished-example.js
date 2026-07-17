const tl = gsap.timeline({ repeat: -1, repeatDelay: 3 })

tl
.set('#panel-one', {
    top: 0,
})
.from('#panel-one', {
    opacity: 0,
    duration: 1
})
.set('#panel-two', {
    top: 0
}, '+=1')
.from('#panel-two', {
    duration: 0.5,
    opacity: 0
})
.to('#panel-two', {
    top: -300,
    duration: 2
},'+=1')
.set('#panel-three', {top: 0})
.from('#panel-three', {
    opacity: 0,
    duration: 1,
    scale: 1.5
}, '+=1')