export const calculate = (subject) => {
  const m1 = parseFloat(subject.mid1) || 0;
  const m2 = parseFloat(subject.mid2) || 0;
  const submitted = parseFloat(subject.submitted) || 0;
  const total = parseFloat(subject.total) || 1;
  const attendance = parseFloat(subject.attendance) || 0;

  // 🎯 Mid calculation (best performance weight)
  const smartMid = 0.8 * Math.max(m1, m2) + 0.2 * Math.min(m1, m2);

  // 🎯 Assignments (out of 5)
  const assignments = (submitted / total) * 5;

  // 🎯 Attendance (out of 5)
  const attendanceMarks = (attendance / 100) * 5;

  // 🎯 Total internal (out of 40)
  const totalInternal = smartMid + assignments + attendanceMarks;

  // ✅ Convert to OUT OF 15
  const internal15 = (totalInternal / 40) * 15;

  // 🎯 Minimum external needed
  const minExternal = Math.max(28, 40 - internal15);

  // 🎯 Pass condition
  const pass = (ext) => ext >= 28 && (internal15 + ext) >= 40;

  return {
    smartMid: +smartMid.toFixed(2),
    assignments: +assignments.toFixed(2),
    attendanceMarks: +attendanceMarks.toFixed(2),
    totalInternal: +totalInternal.toFixed(2),
    internal15: +internal15.toFixed(2), // ⭐ OUT OF 15
    minExternal: +minExternal.toFixed(2),
    pass,
  };
};