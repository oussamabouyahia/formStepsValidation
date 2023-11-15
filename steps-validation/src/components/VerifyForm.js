import AccountInfo from "./AccountInfo";
import BasicInfo from "./BasicInfo";
import AdditionalInfo from "./AdditionalInfo";

export default function VerifyForm({
  basicInfo,
  setBasicInfo,
  handleSubmit,
  formValidation,
}) {
  return (
    <div>
      <BasicInfo
        basicInfo={basicInfo}
        setBasicInfo={setBasicInfo}
        excludeButton={true}
      />
      <AccountInfo
        basicInfo={basicInfo}
        setBasicInfo={setBasicInfo}
        excludeButton={true}
      />
      <AdditionalInfo
        basicInfo={basicInfo}
        setBasicInfo={setBasicInfo}
        excludeButton={true}
      />
      <button disabled={!formValidation()} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
