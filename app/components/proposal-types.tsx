export default function ProposalType() {
  return (
    <div className="bg-gray3 flex flex-col h-40">
      <p className="col-gray0">Proposal Type</p>
      <p>- New: Multiple Choice Polls</p>
      <p>
        Now, in addition to creating a proposal with simple <span>Yes</span>{" "}
        <span>No</span> choices, you may create polls with several voting
        options. Note that these multiple choice polls hace actons and are
        therefore non-executable.
      </p>
      <h4>What ype of proposal are you creating?</h4>
      <div>
        <button>Executable (on-chain)</button>
        <button>Multiple Choice Poll (off-chain)</button>
      </div>
    </div>
  );
}
