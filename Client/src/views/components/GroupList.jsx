import { useState, useEffect } from "react";
import { GroupCard } from "./GroupCard";
import { PlusSquare } from "react-feather";
import "../../assets/css/GroupList.css";
import Swal from "sweetalert2";

export function GroupList() {

  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [groupDescription, setGroupDescription] = useState("");
  const [groupType, setGroupType] = useState("public");
  const [formError, setFormError] = useState("");

  // Hàm lấy danh sách nhóm từ API
  const fetchGroups = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/create-group", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setGroups(data);
    } catch (err) {
      setError(`Failed to load groups: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Gọi hàm fetchGroups khi component được mount
  useEffect(() => {
    fetchGroups();
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setGroupName("");
    setGroupDescription("");
    setGroupType("public");
    setFormError("");
  };

  const handleGroupTypeChange = (event) => {
    setGroupType(event.target.value);
  };

  const handleCreateGroup = async () => {
    // Kiểm tra dữ liệu đầu vào
    if (!groupName.trim()) {
      setFormError("Group Name is required.");
      return;
    }
    if (!groupDescription.trim()) {
      setFormError("Group Description is required.");
      return;
    }

    // Tạo đối tượng nhóm mới
    const newGroup = {
      name: groupName,
      description: groupDescription,
      isPrivate: groupType === "private",
      members: [], // Danh sách thành viên ban đầu rỗng
    };

    // Gửi yêu cầu tạo nhóm mới đến API
    try {
      const response = await fetch("http://localhost:5000/api/create-group", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newGroup),
      });

      if (response.ok) {
        await fetchGroups(); // Lấy lại danh sách nhóm sau khi tạo thành công
        Swal.fire({
          title: "Thành công!",
          text: "Nhóm mới đã được tạo thành công.",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        const errorData = await response.json();
        Swal.fire({
          title: "Lỗi!",
          text: errorData.error || "Có lỗi xảy ra khi gửi dữ liệu lên server!",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Lỗi!",
        text: error.message || "Không thể kết nối đến server!",
        icon: "error",
        confirmButtonText: "OK",
      });
    }

    // Đóng modal và xóa dữ liệu form
    handleCloseModal();
  };

  return (
    <div className="group-list-container">
      <h2 className="page-title">My Groups</h2>

      {/* Nút để tạo nhóm mới */}
      <button className="create-group-btn" onClick={handleOpenModal}>
        <PlusSquare className="create-group-icon" /> Create Group
      </button>

      {/* Modal để tạo nhóm mới */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 className="modal-title">Create New Group</h3>
            <input
              type="text"
              className="input-field"
              placeholder="Group Name"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
            />
            <textarea
              className="input-field"
              placeholder="Group Description"
              value={groupDescription}
              onChange={(e) => setGroupDescription(e.target.value)}
            />

            <div className="group-type-section">
              <label className="radio-container">
                <input
                  type="radio"
                  value="public"
                  checked={groupType === "public"}
                  onChange={handleGroupTypeChange}
                />
                <span className="custom-radio"></span>
                Public
              </label>
              <label className="radio-container">
                <input
                  type="radio"
                  value="private"
                  checked={groupType === "private"}
                  onChange={handleGroupTypeChange}
                />
                <span className="custom-radio"></span>
                Private
              </label>
            </div>

            {/* Hiển thị lỗi nếu có */}
            {formError && <p className="error-text">{formError}</p>}

            <div className="modal-actions">
              <button className="cancel-btn" onClick={handleCloseModal}>
                Cancel
              </button>
              <button className="create-btn" onClick={handleCreateGroup}>
                Create
              </button>
            </div>
          </div>
        </div>
      )}

      {loading ? (
        <p className="loading-text">Loading groups...</p>
      ) : error ? (
        <p className="error-text">{error}</p>
      ) : (
        <div className="group-cards-container">
          {groups
            .filter((group) => group._id) 
            .map((group) => (
              <GroupCard key={group._id} group={group} />
            ))}
        </div>
      )}
    </div>
  );
}

export default GroupList;
