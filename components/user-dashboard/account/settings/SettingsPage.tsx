import DropdownSection from "./DropdownSection";
import TwoFactorAuth from "./TwoFactorAuth";
import NotificationSettings from "./NotificationSettings";
import NotificationPreferences from "./NotificationPreferences";

export default function SettingsPage() {
  return (
    <div className="w-full  mx-auto bg-white shadow-md rounded-lg p-4">
      <DropdownSection title="TWO FACTOR AUTHENTICATOR (2FA)">
        <TwoFactorAuth />
      </DropdownSection>

      <DropdownSection title="NOTIFICATIONS SETTINGS">
        <div className="flex flex-col md:flex-row space-y-10 md:space-y-0">
          <NotificationSettings />
          <NotificationPreferences />
        </div>
      </DropdownSection>
    </div>
  );
}
