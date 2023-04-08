import { MobileInfoModel } from "@/domain/models/commons/mobile-info.model";

export const mobileInfo = async () => {
    const data = await MobileInfoModel.find();

    // order by position
    const ordered = data.sort((a, b) => a.position - b.position);

    return ordered;
}