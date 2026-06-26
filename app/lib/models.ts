import modelsData from "../data/models.json"
import type { Model } from "../types"

const typedModelsData: Model[] = modelsData

export async function getAllModels(): Promise<Model[]> {

  return typedModelsData
}