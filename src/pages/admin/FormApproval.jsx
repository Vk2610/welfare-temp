import FormApprovalCard from "../../components/FormApprovalCard";

function FormApproval() {
    return (
        <>
            {
                [1, 2, 3, 4, 5, 6].map(() => (<FormApprovalCard
                    username={"Badal Pradip Lad"} formDate={"23 / 11 / 2025"} disease={"Fever"} patientName={"Badal Lad"} balanceUsed={"15000"} requestedAmount={"5000"} />))
            }
        </>
    )
}

export default FormApproval;
