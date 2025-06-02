import axios, { type AxiosResponse } from "axios";
import { geminiModel } from "../config";
import type GenerateContentRequest from "./dto/GenerateContentRequest";
import type GenerateContentResponse from "./dto/GenerateContentResponse";


const axiosInstance = axios.create({
    baseURL: "https://gemini.myles.hk/api/v1beta",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    timeout: 120000, // 120 seconds timeout
});

export const api = {
    generateContent: async (data: GenerateContentRequest) => {
        try {
            const response =
                await axiosInstance
                    .post<GenerateContentRequest, AxiosResponse<GenerateContentResponse>>(
                        `/models/${geminiModel}:generateContent`,
                        data
                    );
            return response.data;
        } catch (error) {
            console.error("Error generating content:", error);
            throw error;
        }
    }
};