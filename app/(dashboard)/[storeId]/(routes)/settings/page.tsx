import { auth } from "@clerk/nextjs"

interface SettingsPageProps {
      params: {
            storeId: string,
      }
};

const SettingsPage: React.FC<SettingsPageProps> = ({
      params
}) => {
      const { userId } = auth();
      return <>
      <h1>Settings here</h1>
      </>
}
 
export default SettingsPage;