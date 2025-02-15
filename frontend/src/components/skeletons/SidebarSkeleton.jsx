import { Users } from "lucide-react";

const SidebarSkeleton = () => {
  // Create 8 skeleton items
  const skeletonContacts = Array(8).fill(null);

  return (
    <aside className="h-100 border-end bg-light d-flex flex-column transition-all">
      {/* Header */}
      <div className="border-bottom p-3 d-flex align-items-center">
        <Users className="me-2" size={24} />
        <span className="fw-medium d-none d-lg-inline">Contacts</span>
      </div>

      {/* Skeleton Contacts */}
      <div className="overflow-auto py-3">
        {skeletonContacts.map((_, idx) => (
          <div key={idx} className="d-flex align-items-center gap-3 p-3">
            {/* Avatar Skeleton */}
            <div className="rounded-circle bg-secondary bg-opacity-25" style={{ width: "48px", height: "48px" }}></div>

            {/* User Info Skeleton - Only visible on larger screens */}
            <div className="d-none d-lg-block flex-grow-1">
              <div className="bg-secondary bg-opacity-25 rounded w-75 mb-2" style={{ height: "12px" }}></div>
              <div className="bg-secondary bg-opacity-25 rounded w-50" style={{ height: "10px" }}></div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SidebarSkeleton;
