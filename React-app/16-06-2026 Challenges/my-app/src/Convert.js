// // Writing Markup with JSX

// // 1. Convert some HTML to JSX

export default function convert() {
    return (
        <div >
            <div className="intro">
                <h1>Welcome to my website!</h1>
            </div>
            <p className="summary">
                You can find my thoughts here.
                <br /><br />
                <b>And <i>pictures</i></b> of scientists!
            </p>
        </div>
    );
}

