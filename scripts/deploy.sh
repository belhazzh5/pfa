#!/bin/bash

# Art Gallery Kubernetes Deployment Script

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
NAMESPACE="art-gallery"
IMAGE_NAME="art-gallery"
IMAGE_TAG="latest"

echo -e "${GREEN}🚀 Starting Art Gallery Kubernetes Deployment${NC}"

# Check if kubectl is installed
if ! command -v kubectl &> /dev/null; then
    echo -e "${RED}❌ kubectl is not installed. Please install kubectl first.${NC}"
    exit 1
fi

# Check if cluster is accessible
if ! kubectl cluster-info &> /dev/null; then
    echo -e "${RED}❌ Cannot connect to Kubernetes cluster. Please check your kubeconfig.${NC}"
    exit 1
fi

echo -e "${YELLOW}📦 Building Docker image...${NC}"
docker build -t ${IMAGE_NAME}:${IMAGE_TAG} .

# If using a registry, push the image
# echo -e "${YELLOW}📤 Pushing image to registry...${NC}"
# docker tag ${IMAGE_NAME}:${IMAGE_TAG} your-registry/${IMAGE_NAME}:${IMAGE_TAG}
# docker push your-registry/${IMAGE_NAME}:${IMAGE_TAG}

echo -e "${YELLOW}🔧 Applying Kubernetes manifests...${NC}"

# Apply namespace first
kubectl apply -f k8s/namespace.yaml

# Apply all other resources
kubectl apply -f k8s/

echo -e "${YELLOW}⏳ Waiting for deployment to be ready...${NC}"
kubectl wait --for=condition=available --timeout=300s deployment/art-gallery-deployment -n ${NAMESPACE}

echo -e "${GREEN}✅ Deployment completed successfully!${NC}"

# Display deployment status
echo -e "${YELLOW}📊 Deployment Status:${NC}"
kubectl get pods -n ${NAMESPACE}
kubectl get services -n ${NAMESPACE}
kubectl get ingress -n ${NAMESPACE}

# Get the service URL
SERVICE_URL=$(kubectl get ingress art-gallery-ingress -n ${NAMESPACE} -o jsonpath='{.spec.rules[0].host}' 2>/dev/null || echo "localhost")
echo -e "${GREEN}🌐 Application will be available at: https://${SERVICE_URL}${NC}"

# Port forward for local testing (optional)
echo -e "${YELLOW}💡 For local testing, run: kubectl port-forward service/art-gallery-service 3000:80 -n ${NAMESPACE}${NC}"