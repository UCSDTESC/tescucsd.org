// import AirTable from "./AirTable";
// import "./CouncilMembers.css";
import useWindowDimensions from "../../Hooks/UseWindowDimensions";
const AIRTABLEURL =
  "https://airtable.com/embed/appA3VErzwydr9T1M/shrxLuF6J25c0Z5WJ?backgroundColor=orange&viewControls=on?backgroundColor=green";

const CouncilMembers = () => {
  const { width, height } = useWindowDimensions();
  return (
    <div className="min-h-fit">
      {/* <div className="button-container">
        <button>
          <a href="link" className="join-button-text">
            JOIN TESC AS AN ORGANIZATION
          </a>
        </button>
      </div> */}
      <div className="mt-20 mb-20 flex-col flex justify-center items-center">
        <h1 className="font-medium [line-height:1.2] text-[2vw] mb-2">
          Council Members
        </h1>
        <iframe
          src={AIRTABLEURL}
          width={width * 0.8}
          height={height}
          title="EventsAirtable"
          style={{ marginTop: "1rem" }}
        ></iframe>
      </div>
    </div>
  );
};

export default CouncilMembers;
