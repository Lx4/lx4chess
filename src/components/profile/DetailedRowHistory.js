import React, { useContext } from "react";
import ProfileContext from "../../context/profile/profileContext";

const DetailedRowHistory = ({ index }) => {
  const { state } = useContext(ProfileContext);
  const matchDetails = state.profile.matches[index];
  return (
    <tr className="bg-gray-900 h-20">
      <td className="text-white" colSpan="6">
        <div className="flex"></div>
      </td>
    </tr>
  );
};

// improve the way we fetch the data to improve loading time for the first display of profile?
// See how w

export default DetailedRowHistory;
