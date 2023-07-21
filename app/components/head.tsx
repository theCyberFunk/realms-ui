const steps = [
    {count: 1, text: "Rules & Operations"},
    {count: 2, text: "Title & Description"}
]

export default function Head() {
    return (
        <div className="flex flex-col">
            <p>
                <span className="col-gray0">Step {steps[0].count} of 2</span>
                <span>{steps[0].text}</span>
            </p>
            <p>
                <span>Dao Name Here</span>
                <span>
                    <span className="col-gray0">Org Type: </span>
                    <span>Community Token DAO</span>
                </span>
            </p>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h1>Let's create a proposal.</h1>
        </div>
    );
  }
  