"use client";

import { useEffect, useState } from "react";

interface Notification {
  id: string;
  message: string;
  category: string;
  date: string;
  isRead: boolean;
}

const Notifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [filterDate, setFilterDate] = useState("All");
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterReadStatus, setFilterReadStatus] = useState("All");

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const res = await fetch("/api/notifications"); // Replace with backend API
      const data = await res.json();
      setNotifications(data);
      setUnreadCount(data.filter((n: Notification) => !n.isRead).length);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  const markAllAsRead = async () => {
    try {
      await fetch("/api/notifications/mark-all", { method: "POST" }); // Replace with backend endpoint
      setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
      setUnreadCount(0);
    } catch (error) {
      console.error("Error marking notifications as read:", error);
    }
  };

  const filteredNotifications = notifications
    .filter((notif) => filterDate === "All" || notif.date === filterDate)
    .filter(
      (notif) => filterCategory === "All" || notif.category === filterCategory
    )
    .filter(
      (notif) =>
        filterReadStatus === "All" ||
        (filterReadStatus === "Read" ? notif.isRead : !notif.isRead)
    );

  return (
    <div className="p-4 bg-white shadow rounded-lg w-full ">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg text-[#2C2C2C] font-semibold py-6">
          Notification
          {unreadCount > 0 && (
            <span className="ml-2 text-sm bg-red-500 text-white px-2 py-1 rounded-full">
              {unreadCount}
            </span>
          )}
        </h2>
      </div>

      {/* Filters */}
      <div className="flex space-x-2 mb-4">
        {/* Date Filter */}
        <select
          className="bg-[#F1F1F1] text-base font-medium px-3 py-2 text-[#7F7F7F] rounded-md"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
        >
          <option className="text-xs text-[#7F7F7F]" value="All">
            All
          </option>
          <option className="text-xs text-[#7F7F7F]" value="Today">
            Today
          </option>
          <option className="text-xs text-[#7F7F7F]" value="Yesterday">
            Yesterday
          </option>
          <option className="text-xs text-[#7F7F7F]" value="Select date">
            Select date
          </option>
        </select>

        {/* Category Filter */}
        <select
          className="bg-[#F1F1F1] text-base font-medium px-3 py-2 text-[#7F7F7F] rounded-b-md"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option className="text-xs text-[#7F7F7F]" value="All">
            All
          </option>
          <option className="text-xs text-[#7F7F7F]" value="Hotel booking">
            Hotel booking
          </option>
          <option className="text-xs text-[#7F7F7F]" value="Flight booking">
            Flight booking
          </option>
          <option className="text-xs text-[#7F7F7F]" value="Activity booking">
            Activity booking
          </option>
          <option className="text-xs text-[#7F7F7F]" value="Car booking">
            Car booking
          </option>
          <option className="text-xs text-[#7F7F7F]" value="Transaction">
            Transaction
          </option>
        </select>

        {/* Read Status Filter */}
        <select
          className="bg-[#F1F1F1] text-base font-medium px-3 py-2 text-[#7F7F7F] rounded-md"
          value={filterReadStatus}
          onChange={(e) => setFilterReadStatus(e.target.value)}
        >
          <option className="text-xs text-[#7F7F7F]" value="All">
            All
          </option>
          <option className="text-xs text-[#7F7F7F]" value="Read">
            Read
          </option>
          <option className="text-xs text-[#7F7F7F]" value="Unread">
            Unread
          </option>
        </select>
        <button
          onClick={markAllAsRead}
          className="bg-[#F1F1F1] text-base font-medium px-3 py-2 text-[#7F7F7F] rounded-md hover:bg-gray-300"
        >
          Mark all as read
        </button>
      </div>

      {/* Notifications List */}
      <div className="flex justify-center items-center">
        {filteredNotifications.length === 0 ? (
          <p className="text-gray-500 text-center align-middle py-20 text-base">No notifications</p>
        ) : (
          filteredNotifications.map((notif) => (
            <div
              key={notif.id}
              className={`p-3 border-b ${notif.isRead ? "text-gray-500" : "font-semibold"}`}
            >
              <p>{notif.message}</p>
              <span className="text-xs text-gray-400">{notif.date}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Notifications;
