# McpRegisterPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the OAuth2 application | 
**icon** | **str** | Icon URL for the application | [optional] 
**metadata** | **Dict[str, object]** | Additional metadata for the application | [optional] 
**client_id** | **str** | Unique identifier for the client | 
**client_secret** | **str** | Secret key for the client. Not included for public clients. | [optional] 
**redirect_urls** | **List[str]** | List of allowed redirect URLs | 
**type** | **str** | Type of the client | 
**authentication_scheme** | **str** | Authentication scheme used by the client | 
**disabled** | **bool** | Whether the client is disabled | 
**user_id** | **str** | ID of the user who registered the client, null if registered anonymously | [optional] 
**created_at** | **datetime** | Creation timestamp | 
**updated_at** | **datetime** | Last update timestamp | 

## Example

```python
from better_auth.models.mcp_register_post200_response import McpRegisterPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of McpRegisterPost200Response from a JSON string
mcp_register_post200_response_instance = McpRegisterPost200Response.from_json(json)
# print the JSON string representation of the object
print(McpRegisterPost200Response.to_json())

# convert the object into a dict
mcp_register_post200_response_dict = mcp_register_post200_response_instance.to_dict()
# create an instance of McpRegisterPost200Response from a dict
mcp_register_post200_response_from_dict = McpRegisterPost200Response.from_dict(mcp_register_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


