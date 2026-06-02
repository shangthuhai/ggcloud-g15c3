import { getZohoApiBaseUrl, requireZohoEnv } from "./config";
import { zohoRequest } from "./request";

export async function uploadToWorkDrive(file: File, parentId?: string) {
  const formData = new FormData();
  formData.append("content", file);
  formData.append("parent_id", parentId ?? requireZohoEnv("ZOHO_WORKDRIVE_FOLDER_ID"));

  return zohoRequest(`${getZohoApiBaseUrl()}/workdrive/api/v1/upload`, {
    method: "POST",
    body: formData,
  });
}
