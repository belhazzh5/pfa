#!/bin/bash

# Art Gallery Kubernetes Cleanup Script

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

NAMESPACE="art-gallery"

echo -e "${YELLOW}🧹 Cleaning up Art Gallery Kubernetes resources...${NC}"

# Delete all resources in the namespace
kubectl delete -f k8s/ --ignore-not-found=true

# Delete the namespace (this will delete everything in it)
kubectl delete namespace ${NAMESPACE} --ignore-not-found=true

echo -e "${GREEN}✅ Cleanup completed successfully!${NC}"