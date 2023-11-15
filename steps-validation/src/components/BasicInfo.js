import { useNavigate } from "react-router-dom";

export default function BasicInfo({
  basicInfo,
  setBasicInfo,
  excludeButton = false,
}) {
  const navigate = useNavigate();

  const firstStepValidation = () => {
    let emailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    return (
      basicInfo.first.length > 2 &&
      basicInfo.last.length > 2 &&
      emailRegex.test(basicInfo.email)
    );
  };
  console.log("helo");
  return (
    <div>
      <h4>Basic Information</h4>
      <form style={{}}>
        <div>
          <label>first name:</label>
          <input
            type="text"
            title="first name at minimum three carachters"
            required
            value={basicInfo.first}
            placeholder="ex:John"
            onChange={(e) =>
              setBasicInfo((prev) => {
                return { ...prev, first: e.target.value };
              })
            }
          />
        </div>
        <div>
          <label>last name:</label>
          <input
            type="text"
            title="last name at minimum three carachters"
            placeholder="ex:Mathieu"
            required
            value={basicInfo.last}
            onChange={(e) =>
              setBasicInfo((prev) => {
                return { ...prev, last: e.target.value };
              })
            }
          />
        </div>
        <div>
          <label>email:</label>
          <input
            type="text"
            required
            value={basicInfo.email}
            title="enter a valid email"
            placeholder="example@email.com"
            onChange={(e) =>
              setBasicInfo((prev) => {
                return { ...prev, email: e.target.value };
              })
            }
          />
        </div>
        {!excludeButton && (
          <button
            disabled={!firstStepValidation()}
            onClick={() => {
              // console.log(firstStepValidation());
              navigate("/account");
            }}
          >
            go to account information
          </button>
        )}
      </form>
    </div>
  );
}
