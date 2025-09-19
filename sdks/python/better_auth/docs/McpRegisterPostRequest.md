# McpRegisterPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**redirect_uris** | **List[object]** |  | 
**token_endpoint_auth_method** | **str** |  | [optional] 
**grant_types** | **str** |  | [optional] 
**response_types** | **str** |  | [optional] 
**client_name** | **str** |  | [optional] 
**client_uri** | **str** |  | [optional] 
**logo_uri** | **str** |  | [optional] 
**scope** | **str** |  | [optional] 
**contacts** | **List[object]** |  | [optional] 
**tos_uri** | **str** |  | [optional] 
**policy_uri** | **str** |  | [optional] 
**jwks_uri** | **str** |  | [optional] 
**jwks** | **str** |  | [optional] 
**metadata** | **str** |  | [optional] 
**software_id** | **str** |  | [optional] 
**software_version** | **str** |  | [optional] 
**software_statement** | **str** |  | [optional] 

## Example

```python
from better_auth.models.mcp_register_post_request import McpRegisterPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of McpRegisterPostRequest from a JSON string
mcp_register_post_request_instance = McpRegisterPostRequest.from_json(json)
# print the JSON string representation of the object
print(McpRegisterPostRequest.to_json())

# convert the object into a dict
mcp_register_post_request_dict = mcp_register_post_request_instance.to_dict()
# create an instance of McpRegisterPostRequest from a dict
mcp_register_post_request_from_dict = McpRegisterPostRequest.from_dict(mcp_register_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


