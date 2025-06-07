// import OpenAI from "openai";

// const client = new OpenAI({apiKey: "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", dangerouslyAllowBrowser: true});
//
// const response = await client.responses.create({
//     model: "gpt-4.1",
//     input: "Write a one-sentence bedtime story about a unicorn."
// });


function pronunciation(){
    return(
        <>
            <div className="videos-parent">
                <nav className="navbar-videos m-2">
                    <div className="">
                        <a href="/">
                            <button className="btn btn-warning">Back</button>
                        </a>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default pronunciation;