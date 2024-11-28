interface UserListProps {
  profile1: string; // رابط الصورة الأولى
  profile2: string; // رابط الصورة الثانية
  profile3: string; // رابط الصورة الثالثة
  profile4: string; // رابط الصورة الرابعة
}

const UserList: React.FC<UserListProps> = ({ profile1, profile2, profile3, profile4 }) => {
  return (
    <div className="flex items-center">
      <img
        src={profile1}
        alt="Profile 1"
        className="w-[60px] h-[60px] rounded-full z-10"
        style={{ marginLeft: 0 }} // الصورة الأولى بدون مارجن
      />
      <img
        src={profile2}
        alt="Profile 2"
        className="w-[60px] h-[60px] rounded-full z-20"
        style={{ marginLeft: -16 }} // الصورة الثانية بمارجن سلبي
      />
      <img
        src={profile3}
        alt="Profile 3"
        className="w-[60px] h-[60px] rounded-full z-30"
        style={{ marginLeft: -16 }} // الصورة الثالثة بمارجن سلبي
      />
      <img
        src={profile4}
        alt="Profile 4"
        className="w-[60px] h-[60px] rounded-full z-40"
        style={{ marginLeft: -16 }} // الصورة الرابعة بمارجن سلبي
      />
    </div>
  );
};

export default UserList;
