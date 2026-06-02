"use client"; // Mandatory directive for interactivity in Next.js App Router

import { useState, useMemo } from "react";
import { Student, mockDatabase } from "@/lib/mockDatabase";

export default function Datatable() {
  // State for the search term
  const [searchTerm, setSearchTerm] = useState("");

  // useMemo optimizes filtering: it only recalculates if searchTerm or mockDatabase changes
  const filteredData = useMemo(() => {
    return mockDatabase.filter(
      (student: Student) =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.major.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm]);

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Student Directory</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name or major..."
        className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Datatable */}
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100 border-b border-gray-200">
            <th className="p-3">ID</th>
            <th className="p-3">Name</th>
            <th className="p-3">Major</th>
            <th className="p-3">Grade</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((student) => (
              <tr
                key={student.id}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="p-3">{student.id}</td>
                <td className="p-3">{student.name}</td>
                <td className="p-3">{student.major}</td>
                <td className="p-3">{student.grade}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="p-3 text-center text-gray-500">
                No results found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
