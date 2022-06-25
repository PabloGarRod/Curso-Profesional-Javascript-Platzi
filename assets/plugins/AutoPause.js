class AutoPause{
    constructor(){
        this.threshold = 0.25
        this.handleIntersection = this.handleIntersection.bind(this);
    }
    run(player){
        this.player = player;
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold,
        })

        observer.observe(this.player.miVideo)
    }

    handleIntersection(entries){
        const entry = entries[0]
        
        const isVisible = entry.intersectionRatio >= this.threshold

        if(isVisible){
            this.player.avanza()
        }else{
            this.player.para()
        }
        
    }
}

export default AutoPause;