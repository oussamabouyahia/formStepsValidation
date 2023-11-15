import { useNavigate } from "react-router-dom";

export default function AccountInfo({
  basicInfo,
  setBasicInfo,
  excludeButton = false,
}) {
  const navigate = useNavigate();
  const secondStepValidation = () => {
    return (
      basicInfo.username.length > 2 &&
      basicInfo.password.length > 7 &&
      basicInfo.confirmPassword === basicInfo.password
    );
  };
  return (
    <div>
      <h4>Account Information</h4>
      <form style={{}}>
        <div>
          <label>username:</label>
          <input
            value={basicInfo.username}
            type="text"
            placeholder="required username"
            required
            onChange={(e) =>
              setBasicInfo((prev) => {
                return { ...prev, username: e.target.value };
              })
            }
          />
        </div>
        <div>
          <label>password:</label>
          <input
            type="password"
            placeholder="password at minimum 8 characters"
            required
            value={basicInfo.password}
            onChange={(e) =>
              setBasicInfo((prev) => {
                return { ...prev, password: e.target.value };
              })
            }
          />
        </div>
        <div>
          <label>confirm password:</label>
          <input
            type="password"
            required
            titel="confirm the sameentred password"
            value={basicInfo.confirmPassword}
            onChange={(e) =>
              setBasicInfo((prev) => {
                return { ...prev, confirmPassword: e.target.value };
              })
            }
          />
        </div>
        {!excludeButton && (
          <button onClick={() => navigate("/")}>back to basic info</button>
        )}
        {!excludeButton && (
          <button
            disabled={!secondStepValidation()}
            onClick={() => navigate("/additional")}
          >
            next additional info
          </button>
        )}
      </form>
    </div>
  );
}
