function sanitizeFormData(formData: any) {
  return { ...formData, branchId: +formData.branchId }
}

export default sanitizeFormData
