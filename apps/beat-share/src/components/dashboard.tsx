"use client";

import {
  ArrowDownIcon,
  Globe,
  Key,
  Lock,
  RefreshCw,
  Settings,
  Zap,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Mock data for API endpoints
const apiEndpoints = [
  {
    id: 1,
    name: "User Authentication",
    method: "POST",
    path: "/api/auth",
    status: "Active",
  },
  {
    id: 2,
    name: "Get User Profile",
    method: "GET",
    path: "/api/user/:id",
    status: "Active",
  },
  {
    id: 3,
    name: "Update User Profile",
    method: "PUT",
    path: "/api/user/:id",
    status: "Active",
  },
  {
    id: 4,
    name: "List Products",
    method: "GET",
    path: "/api/products",
    status: "Active",
  },
  {
    id: 5,
    name: "Create Order",
    method: "POST",
    path: "/api/orders",
    status: "Active",
  },
  {
    id: 6,
    name: "Get Order Details",
    method: "GET",
    path: "/api/orders/:id",
    status: "Inactive",
  },
];

// Mock data for API usage
const apiUsageData = [
  { name: "Mon", requests: 3000 },
  { name: "Tue", requests: 3500 },
  { name: "Wed", requests: 4200 },
  { name: "Thu", requests: 4000 },
  { name: "Fri", requests: 3800 },
  { name: "Sat", requests: 3200 },
  { name: "Sun", requests: 3100 },
];

// Mock data for API response times
const apiResponseTimeData = [
  { name: "Mon", time: 120 },
  { name: "Tue", time: 132 },
  { name: "Wed", time: 101 },
  { name: "Thu", time: 134 },
  { name: "Fri", time: 90 },
  { name: "Sat", time: 110 },
  { name: "Sun", time: 98 },
];

// Mock API keys
const apiKeys = [
  {
    id: 1,
    name: "Production Key",
    key: "pk_live_1234567890abcdef",
    status: "Active",
  },
  {
    id: 2,
    name: "Development Key",
    key: "pk_test_1234567890abcdef",
    status: "Active",
  },
  {
    id: 3,
    name: "Staging Key",
    key: "pk_stage_1234567890abcdef",
    status: "Inactive",
  },
];

export default function APIManagementDashboard() {
  return (
    <div className="container mx-auto py-6">
      <h1 className="mb-4 text-3xl font-bold">API Management Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Requests (24h)
            </CardTitle>
            <Zap className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45,231</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Avg. Response Time
            </CardTitle>
            <RefreshCw className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">126 ms</div>
            <p className="text-xs text-muted-foreground">-4% from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Error Rate</CardTitle>
            <ArrowDownIcon className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0.03%</div>
            <p className="text-xs text-muted-foreground">
              -0.6% from last week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Endpoints
            </CardTitle>
            <Globe className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 from last week</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>API Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={apiUsageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="requests" fill="hsl(var(--primary))" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>API Response Time</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={apiResponseTimeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="time"
                  stroke="hsl(var(--primary))"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>API Endpoints</CardTitle>
            <CardDescription>
              Manage and monitor your API endpoints
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Path</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {apiEndpoints.map((endpoint) => (
                  <TableRow key={endpoint.id}>
                    <TableCell>{endpoint.name}</TableCell>
                    <TableCell>{endpoint.method}</TableCell>
                    <TableCell>{endpoint.path}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          endpoint.status === "Active" ? "default" : "secondary"
                        }
                      >
                        {endpoint.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <Settings className="mr-2 size-4" />
                        Manage
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>API Keys</CardTitle>
            <CardDescription>Manage your API keys</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Key</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {apiKeys.map((apiKey) => (
                  <TableRow key={apiKey.id}>
                    <TableCell>{apiKey.name}</TableCell>
                    <TableCell>
                      <code className="rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                        {apiKey.key.slice(0, 8)}...{apiKey.key.slice(-4)}
                      </code>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          apiKey.status === "Active" ? "default" : "secondary"
                        }
                      >
                        {apiKey.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <Key className="mr-2 size-4" />
                        Rotate
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Button className="mt-4">
              <Lock className="mr-2 size-4" />
              Generate New API Key
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
