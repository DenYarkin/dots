export default class extends React.Component {
    state = { "counter" : 0 }
    render() {
        return 
        (
            <>
                <h2 onClick = {
                    () =>   
                        {
                            this.setState
                            ({
                                "counter": this.state.counter + 1
                            })
                            alert(this.state.counter)
                        }
                    
                    }>
                    <i> 
                        Hello 2 
                    </i>
                </h2>
                <p> {this.state.counter} </p>
            </>
        )
    }
}